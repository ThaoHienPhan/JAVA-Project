import { Collapse } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const QAPage = () => {
  const { t } = useTranslation();

  const onChange = key => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: t('qa_title_1'),
      children: <p>{t('qa_content_1')}</p>,
    },
    {
      key: '2',
      label: t('qa_title_2'),
      children: (
        <div>
          <p>{t('qa_content_2')}</p>
          <p>{t('qa_content_3')}</p>
        </div>
      ),
    },
    {
      key: '3',
      label: t('qa_title_3'),
      children: (
        <div>
          <p>{t('qa_content_4')}</p>
          <p>{t('qa_content_5')}</p>
        </div>
      ),
    },
    {
      key: '4',
      label: t('qa_title_4'),
      children: (
        <div>
          <p>{t('qa_content_6')}</p>
          <p>{t('qa_content_7')}</p>
        </div>
      ),
    },
    {
      key: '5',
      label: t('qa_title_5'),
      children: (
        <div>
          <p>{t('qa_content_8')}</p>
          <p>{t('qa_content_9')}</p>
        </div>
      ),
    },
  ];
  return (
    <div className="container-wrapper my-8">
      <h2 className="w-full text-center text-2xl font-bold mb-8">
        Các câu hỏi thường gặp
      </h2>
      <Collapse items={items} onChange={onChange} />
    </div>
  );
};

export default QAPage;
