import React from 'react'
import { useTranslation } from 'react-i18next';
import { Watch } from 'react-loader-spinner';

export default function LoadingComponent() {
    const { t } = useTranslation('common');

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <Watch
                visible={true}
                height="80"
                width="80"
                radius="48"
                color="#5c0831"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <h1 className='text-lg font-bold w-full text-center'>{t('loading')}</h1>
        </div>
    )
}
