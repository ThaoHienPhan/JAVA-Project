const provinces = [
  {
    value: 'TP. Hồ Chí Minh',
    name: 'TP. Hồ Chí Minh',
  },
  {
    value: 'Hà Nội',
    name: 'Hà Nội',
  },
  {
    value: 'An Giang',
    name: 'An Giang',
  },
  {
    value: 'Bà Rịa – Vũng Tàu',
    name: 'Bà Rịa –Vũng Tàu',
  },
  {
    value: 'Bạc Liêu',
    name: 'Bạc Liêu',
  },
  {
    value: 'Bắc Giang',
    name: 'Bắc Giang',
  },
  {
    value: 'Bắc Kạn',
    name: 'Bắc Kạn',
  },
  {
    value: 'Bắc Ninh',
    name: 'Bắc Ninh',
  },
  {
    value: 'Bến Tre',
    name: 'Bến Tre',
  },
  {
    value: 'Bình Định',
    name: 'Bình Định',
  },
  {
    value: 'Bình Dương',
    name: 'Bình Dương',
  },
  {
    value: 'Bình Phước',
    name: 'Bình Phước',
  },
  {
    value: 'Bình Thuận',
    name: 'Bình Thuận',
  },
  {
    value: 'Cà Mau',
    name: 'Cà Mau',
  },
  {
    value: 'Cần Thơ',
    name: 'Cần Thơ',
  },
  {
    value: 'Cao Bằng',
    name: 'Cao Bằng',
  },
  {
    value: 'Đà Nẵng',
    name: 'Đà Nẵng',
  },
  {
    value: 'Đắk Lắk',
    name: 'Đắk Lắk',
  },
  {
    value: 'Đắk Nông',
    name: 'Đắk Nông',
  },
  {
    value: 'Điện Biên',
    name: 'Điện Biên',
  },
  {
    value: 'Đồng Nai',
    name: 'Đồng Nai',
  },
  {
    value: 'Đồng Tháp',
    name: 'Đồng Tháp',
  },
  {
    value: 'Gia Lai',
    name: 'Gia Lai',
  },
  {
    value: 'Hà Giang',
    name: 'Hà Giang',
  },
  {
    value: 'Hà Nam',
    name: 'Hà Nam',
  },
  {
    value: 'Hà Tĩnh',
    name: 'Hà Tĩnh',
  },
  {
    value: 'Hải Dương',
    name: 'Hải Dương',
  },
  {
    value: 'Hải Phòng',
    name: 'Hải Phòng',
  },
  {
    value: 'Hậu Giang',
    name: 'Hậu Giang',
  },
  {
    value: 'Hòa Bình',
    name: 'Hòa Bình',
  },
  {
    value: 'Hưng Yên',
    name: 'Hưng Yên',
  },
  {
    value: 'Khánh Hòa',
    name: 'Khánh Hòa',
  },
  {
    value: 'Kiên Giang',
    name: 'Kiên Giang',
  },
  {
    value: 'Kon Tum',
    name: 'Kon Tum',
  },
  {
    value: 'Lai Châu',
    name: 'Lai Châu',
  },
  {
    value: 'Lâm Đồng',
    name: 'Lâm Đồng',
  },
  {
    value: 'Lạng Sơn',
    name: 'Lạng Sơn',
  },
  {
    value: 'Lào Cai',
    name: 'Lào Cai',
  },
  {
    value: 'Long An',
    name: 'Long An',
  },
  {
    value: 'Nam Định',
    name: 'Nam Định',
  },
  {
    value: 'Nghệ An',
    name: 'Nghệ An',
  },
  {
    value: 'Ninh Bình',
    name: 'Ninh Bình',
  },
  {
    value: 'Ninh Thuận',
    name: 'Ninh Thuận',
  },
  {
    value: 'Phú Thọ',
    name: 'Phú Thọ',
  },
  {
    value: 'Phú Yên',
    name: 'Phú Yên',
  },
  {
    value: 'Quảng Bình',
    name: 'Quảng Bình',
  },
  {
    value: 'Quảng Nam',
    name: 'Quảng Nam',
  },
  {
    value: 'Quảng Ngãi',
    name: 'Quảng Ngãi',
  },
  {
    value: 'Quảng Ninh',
    name: 'Quảng Ninh',
  },
  {
    value: 'Quảng Trị',
    name: 'Quảng Trị',
  },
  {
    value: 'Sóc Trăng',
    name: 'Sóc Trăng',
  },
  {
    value: 'Sơn La',
    name: 'Sơn La',
  },
  {
    value: 'Tây Ninh',
    name: 'Tây Ninh',
  },
  {
    value: 'Thái Bình',
    name: 'Thái Bình',
  },
  {
    value: 'Thái Nguyên',
    name: 'Thái Nguyên',
  },
  {
    value: 'Thanh Hóa',
    name: 'Thanh Hóa',
  },
  {
    value: 'Thừa Thiên – Huế',
    name: 'Thừa Thiên – Huế',
  },
  {
    value: 'Tiền Giang',
    name: 'Tiền Giang',
  },
  {
    value: 'Trà Vinh',
    name: 'Trà Vinh',
  },
  {
    value: 'Tuyên Quang',
    name: 'Tuyên Quang',
  },
  {
    value: 'Vĩnh Long',
    name: 'Vĩnh Long',
  },
  {
    value: 'Vĩnh Phúc',
    name: 'Vĩnh Phúc',
  },
  {
    value: 'Yên Bái',
    name: 'Yên Bái',
  },
];

export default provinces;
