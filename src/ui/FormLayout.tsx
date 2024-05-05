import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const FormLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 text-[#444] font-poppins">
      <div className="w-1/2 h-[650px] bg-white rounded-lg shadow-sm p-4 grid grid-cols-[280px_1fr]">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default FormLayout;
