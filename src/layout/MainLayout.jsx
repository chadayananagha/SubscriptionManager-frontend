import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const MainLayout = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<NavBar />

			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
