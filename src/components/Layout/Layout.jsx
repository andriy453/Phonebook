import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { TailSpin } from 'react-loader-spinner';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<TailSpin
                height="300"
                width="300"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{    position: "absolute",left: "50%",top: "50%",transform:" translate(-50%,-50%)"}}
                visible={true}
              />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
