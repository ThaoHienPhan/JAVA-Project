import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  CircularProgress,
  ClickAwayListener,
  Popper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useTranslation } from 'react-i18next';

import LangSelect from 'components/LangSelect/LangSelect';
import { useDispatch } from 'react-redux';
import { logout } from '~/store/slices/authSlice';
import Logo from '../Logo';
import { ShoppingCart } from '@mui/icons-material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getMyCart } from '~/api/cartApi';
import { useDebounce } from '@uidotdev/usehooks';
import productApi from '~/api/productApi';
import LoadingComponent from '../Loading';

Header.propTypes = {};
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    justifyContent: 'space-between',
  },
  left: { display: 'flex', alignItems: 'center', gap: '40px', width: '50%' },
  about: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  text: {
    textAlign: 'left',
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  navigate: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#181818',
    padding: '0 200px',
    '& .MuiButtonBase-root': {
      color: '#FFFFFF !important',
      textTransform: 'capitalize',
    },
    zIndex: 7,
  },
  text_content: {
    fontSize: '0.5rem !important', // sử dụng con của text đi
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '4px',
  backgroundColor: '#CCC',
  '&:hover': {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

// eslint-disable-next-line no-empty-pattern
const SearchIconWrapper = styled('div')(({}) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: '7px',
  top: '0',
  color: '#8F8F8F',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '10px',
    fontSize: '0.8rem',
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const imgUrl = 'http://localhost:8080/files';

function Header() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openPopper, setOpenPopper] = React.useState(false);

  const searchList = useQuery(
    ['searchProd', debouncedSearchTerm],
    () => productApi.searchProduct(debouncedSearchTerm),
    { enabled: !!debouncedSearchTerm }
  );

  const handleChange = e => {
    searchTerm && setOpenPopper(true);
    setSearchTerm(e.target.value);
    setAnchorEl(e.currentTarget);
  };

  const { data } = useQuery(['userCart'], getMyCart, { retry: 1 });

  const classes = useStyles();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const handleLogout = useMutation({
    mutationFn: () => localStorage.removeItem('accessToken'),
    onSuccess: () => {
      queryClient.removeQueries(['userCart']);
      navigate('/');
    },
  });

  const handleClearSearch = id => {
    setSearchTerm('');
    setAnchorEl(null);
    navigate(`/product/detail/${id}`);
  };

  return (
    <>
      <Box className={classes.header}>
        <Box className={classes.left}>
          <Logo />
          <Box className="search relative w-1/2">
            <Search>
              <StyledInputBase
                placeholder={t('product_search')}
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
                onChange={handleChange}
                ref={setAnchorEl}
              />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
            {searchTerm && (
              <ClickAwayListener onClickAway={() => setOpenPopper(false)}>
                <Popper
                  open={Boolean(openPopper)}
                  anchorEl={anchorEl}
                  placement="bottom-start"
                  className="z-10 w-[calc(25%-33px)] bg-white"
                >
                  {searchList.isLoading ? (
                    <LoadingComponent />
                  ) : (
                    <>
                      <div className=" p-2 flex flex-col gap-3">
                        {searchList.data?.length === 0 ? (
                          <div className="flex flex-col justify-center items-center">
                            Không tìm thấy {searchTerm}
                          </div>
                        ) : (
                          searchList.data.slice(0, 5).map((data, i) => (
                            <div
                              key={i}
                              className="flex justify-between gap-2 cursor-pointer hover:bg-slate-300 p-2"
                              onClick={() => handleClearSearch(data.productId)}
                            >
                              <img
                                src={`${imgUrl}/${data.productUrl}`}
                                width={40}
                                className=" object-contain"
                              />
                              <div className="flex-1 text-left">
                                {data.productName}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </>
                  )}
                </Popper>
              </ClickAwayListener>
            )}
          </Box>
        </Box>
        <Box className={classes.right}>
          <LocationOnIcon fontSize="large" />
          <HelpOutlineIcon fontSize="large" />
          <div className="relative">
            <ShoppingCart
              style={{ color: '#6c757d' }}
              fontSize="large"
              className="cursor-pointer"
              onClick={() => navigate('/cart')}
            />
            <div className="absolute -top-1 -right-2 text-white bg-red-500 rounded-full text-sm px-2">
              {data?.cartItemList.length}
            </div>
          </div>
          {!isLoggedIn ? (
            <>
              <div className="w-28">
                <button
                  onClick={() => navigate('/login')}
                  className="rounded-full text-[#FBFBFB] border-2 border-solid border-black bg-[#363636]/[.94] px-3 py-2 font-medium w-full"
                >
                  {t('login_btn')}
                </button>
              </div>
              <div className="w-28">
                <button
                  onClick={() => navigate('/register')}
                  className="rounded-full border-2 border-solid bg-[#F8BF2D]/[.35] px-3 py-2 font-medium border-black w-full"
                >
                  {t('signup_btn')}
                </button>
              </div>
            </>
          ) : (
            <div className="w-28">
              <button
                onClick={() => {
                  dispatch(logout());
                  setIsLoggedIn(false);
                  handleLogout.mutate();
                }}
                className="rounded-full border-2 border-solid bg-[#F8BF2D]/[.35] px-3 py-2 font-medium border-black w-full"
              >
                {t('logout_btn')}
              </button>
            </div>
          )}

          <LangSelect />
        </Box>
      </Box>
      <Box className={classes.navigate}>
        {[
          'sale',
          'mac',
          'ipad',
          'iphone',
          'watch',
          'airpods',
          'accessories',
        ].map((value, i) => (
          <Button key={i} onClick={() => navigate(`/${value}`)}>
            {t(value)}
          </Button>
        ))}
      </Box>
    </>
  );
}

export default Header;
