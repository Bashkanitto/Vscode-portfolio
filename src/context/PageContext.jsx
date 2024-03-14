import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
export const MyProvider = ({ children }) => {
	const page = 'portfolio.js';
	const [isPreviewActive, setIsPreviewActive] = useState(true);
	const [activeIndex, setActiveIndex] = useState(0);
	const projectList = [
		{
			id: 0,
			name: 'Portfolio',
			code: `
			import { Github, Linkedin } from 'lucide-react';
			import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
			import Image from 'next/image';
			
			export default function Hero() {
				return (
					<>
						<section className='px-20 pb-20 bg-secondary lg:justify-center lg:p-20'>
							<MaxWidthWrapper className='pt-10'>
								<div className='flex flex-col-reverse  gap-15 lg:flex lg:flex-row items-center'>
									<div className='flex flex-col gap-10 lg:items-start items-center text-center lg:text-start	'>
										<h1 className='text-6xl font-bold mt-10 lg:mt-0'>
											Front-end React Developer 👋
										</h1>
										<p className='text-xl w-full lg:w-2/3'>
											Hi, im Aidyn Meiramkhanuly. A passionate Front-end React
											Developer based in Taraz, Kazakhstan. 📍
										</p>
										<div className='flex gap-5'>
											<button>
												<Linkedin className='w-7 h-7 hover:text-blue-600 transition-all duration-200' />
											</button>
											<button>
												<Github className='w-7 h-7 hover:text-blue-600 transition-all duration-200' />
											</button>
										</div>
									</div>
									<Image
										src='/herobg.jpeg'
										className='hero-animate float-right brightness-150'
										width={400}
										height={400}
										alt='heroBg'
									/>
								</div>
								<div className='stack flex flex-col lg:flex-row lg:flex gap-3 lg:gap-10 mt-20 items-center'>
									<p>Tech Stack</p>
									<p className='text-2xl rotate-90 lg:rotate-0 '>|</p>
									<div>
										<ul className='flex gap-10 w-full'>
											<li>
												<Image
													src='/html_css.svg'
													width={100}
													height={100}
													alt='stack'
												/>
											</li>
											<li>
												<Image
													src='/js_ts.svg'
													width={100}
													height={100}
													alt='stack'
												/>
											</li>
											<li>
												<Image
													src='/react_nextjs.svg'
													width={100}
													height={100}
													alt='stack'
												/>
											</li>
											<li>
												<Image
													src='/tailwind_sass.svg'
													width={100}
													height={100}
													alt='stack'
												/>
											</li>
										</ul>
									</div>
								</div>
							</MaxWidthWrapper>
						</section>
					</>
				);
			}
			`,
			preview: '/imgPortfolio.png',
		},
		{
			id: 1,
			name: 'Smavy-coop',
			code: `
			import { ArrowUpRight, AlignCenter } from 'lucide-react';
			import { useState } from 'react';
			
			const Header = () => {
				const [isMenuOpen, setIsMenuOpen] = useState(false);
				const handleMenuOpen = () => {
					setIsMenuOpen(!isMenuOpen);
				};
			
				return (
					<header className='container flex justify-between mx-auto h-[95px] items-center'>
						<img src='/images/logo.png' alt='logo' />
						<nav className='hidden lg:flex gap-10 '>
							<a href='#main'>Главная</a>
							<a href='#about'>О Нас</a>
							<a href='#courses'>Курсы</a>
							<a href='#reviews'>Отзывы</a>
							<a href='#price'>Прайс</a>
							<a href='#team'>Команда</a>
							<a href='#contact'>Контакты</a>
						</nav>
						<nav
							onClick={handleMenuOpen}
							style={{ display: isMenuOpen ? 'flex' : 'none' }}
							className='mobileMenu absolute z-20 top-0 bg-slate-800 w-full flex-col items-center'
						>
							<a href='#main'>Главная</a>
							<a href='#about'>О Нас</a>
							<a href='#courses'>Курсы</a>
							<a href='#reviews'>Отзывы</a>
							<a href='#price'>Прайс</a>
							<a href='#team'>Команда</a>
							<a href='#contact'>Контакты</a>
						</nav>
						<button onClick={handleMenuOpen} className='flex lg:hidden'>
							<AlignCenter />
						</button>
						<button className='border p-2 hover:bg-white hover:text-black transition rounded-lg text-sm flex gap-1 items-center'>
							Отправить запрос
							<ArrowUpRight className='bg-white rounded-full text-black w-4 h-4' />
						</button>
					</header>
				);
			};
			
			export default Header;
			`,
			preview: '/imgBsoft.png',
		},
		{
			id: 2,
			name: 'Bsoft',
			code: `
			import { ArrowUpRight, PlayCircle } from 'lucide-react';

			const Hero = () => {
				return (
					<section
						id='main'
						className='hero container-full lg:container mx-auto transition-all duration-300'
					>
						<div className='relative flex justify-center items-center'>
							<img
								src='/images/imgHero.png'
								className=' rounded-none lg:rounded-2xl  h-[80vh] md:h-[85vh] object-cover'
								alt='imgHero'
							/>
							<div className='absolute w-full lg:bottom-0 lg:p-10 flex flex-col gap-4 items-start p-4 lg:items-start'>
								<h1 className='text-start lg:text-start text-5xl lg:text-6xl font-semibold w-full sm:w-2/3'>
									Кодируй Свои Мечты в Реальность
								</h1>
								<div className='flex flex-col lg:flex-row items-start justify-between gap-10 w-full'>
									<p className='w-3/4 lg:w-1/2 text-xs lg:text-sm text-start lg:text-start'>
										Раскрой свой потенциал в программировании: <br /> продвинутые
										концепции в нашей офлайн-школе программирования
									</p>
									<div className='hero-btns flex gap-4 text-xs'>
										<button className='bg-white rounded-lg p-2 flex items-center text-black gap-1 hover:bg-black hover:text-white transition duration-500'>
											<ArrowUpRight className='w-4 h-4' />
											Связатся с Нами
										</button>
										<button className='border rounded-lg p-2 flex items-center gap-2 hover:bg-white hover:text-black duration-500'>
											<PlayCircle />
											Посмотреть промо-ролик
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				);
			};
			
			export default Hero;
			`,
			preview: '/imgBsoft.png',
		},
		{
			id: 3,
			name: 'SmavyPlatform',
			code: `
			import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LoadingCircle } from '@atoms';
import { Protected } from './routes/ProtectedRoutes';
import { Public } from './routes/PublicRoutes';
import { setCookie } from './store/authSlice';

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const cookieExists = document.cookie.split(';').some((item) => item.trim().startsWith('accessToken='));
    
    if(cookieExists ){
      dispatch(setCookie())
    }
  
  }, [])

  const isLoading = useSelector(state => state.auth.isLoading);
  const isAuthorized = useSelector(state => state.auth.isAuthorized);


  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <>
      {isAuthorized ? <Protected /> : <Public />}
    </>
  );
};

export default App;
`,
			preview: '/imgPortfolio.png',
		},
		{
			id: 4,
			name: 'BalSoz',
			code: `
			import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendEmail } from '../store/userSlice';
import { getWords } from '../store/wordSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ setIsModalOpen }) => {
  const [inputError, setInputError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWords());
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const emailInput = e.target.email.value;

    if (emailInput.trim() == '') {
      setInputError('Введите E-mail адресс');
    } else {
      dispatch(sendEmail({ email: emailInput }))
        .unwrap()
        .then(() => {
          setIsModalOpen(true);
        })
        .catch(error => {
          console.error('Error sending email:', error);
          navigate('/profile/result');
        });
    }
  };

  return (
    <section
      id='main'
      className='px-2 lg:px-10 w-[96%] md:w-[99%] mb-2 h-[88vh] bg-white  rounded-xl mx-2 flex flex-col justify-between py-5'
    >
      <div className='flex justify-center lg:justify-between h-[100%]'>
        <div className='flex flex-col w-full lg:w-1/2 gap-7  items-center lg:items-start justify-start lg:justify-between overflow'>
          <h1 className='font-bold text-secondary text-4xl lg:text-[4rem] letter leading-[50px] text-center lg:text-start w-full md:w-2/3 lg:w-full animate-hero'>
            Давайте вместе откроем мир для ваших слов
          </h1>
          <p className='flex gap-3 bg-white animate-hero '>
            <CheckCircle2 className='text-white bg-green-500 rounded-full ' />
            Доступно на всех ваших устройствах
          </p>
          <p className='text-center w-full sm:w-2/3 md:w-1/2 lg:hidden animate-hero '>
            Наш подход основан на индивидуальном подходе к каждому клиенту. Мы
            учитываем уникальные потребности и особенности каждого человека,
            чтобы обеспечить наиболее эффективную помощь в развитии речи.
          </p>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center md:items-end md:flex-row gap-2'
          >
            <div className='flex flex-col gap-3'>
              <span className='text-xs ml-2 text-red-500'>{inputError}</span>
              <input
                className='rounded-full text-black p-7 bg-slate-100 w-[300px] h-[0px] animate-hero '
                type='email'
                name='email'
                placeholder='email'
              />
            </div>

            <button
              type='submit'
              className='bg-primary rounded-full w-[170px] h-[56px] mt-10 animate-hero  text-white'
            >
              Пройти тест
            </button>
          </form>
          <p className='pt-0 lg:pt-[40px] w-4/5 text-center lg:text-start hidden lg:flex animate-hero '>
            → Наш подход основан на индивидуальном подходе к каждому клиенту. Мы
            учитываем уникальные потребности и особенности каждого человека,
            чтобы обеспечить наиболее эффективную помощь в развитии речи.
          </p>
        </div>
        <img
          className='pt-10 mr-20 mt-20 w-[500px] h-[400px] hidden lg:flex animate-hero '
          src='/hero-bg.png'
          alt='фоновое изображение главной страницы'
        />
      </div>
      <hr className='my-[2vh] animate-hero ' />
      <div className='hidden md:flex text-green-500 justify-between items-center text-xs lg:text-sm animate-hero '>
        <div className='flex items-center gap-3'>
          <img src='/hero-numb1.png' alt='' /> Простая регистрация
        </div>
        <hr className='w-40 lg:w-80 h-[3px] text-4xl border bg-green-500 hidden md:flex' />
        <div className='flex items-center gap-3'>
          <img src='/hero-numb2.png' alt='' />
          Короткая и интересная игра
        </div>
        <hr className='w-40 lg:w-80 h-[3px] text-4xl border bg-green-500 hidden md:flex' />
        <div className='flex items-center gap-3'>
          <img src='/hero-numb3.png' alt='' />
          Развитие навыков
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
`,
			preview: '/imgBalSoz.png',
		},
	];

	return (
		<MyContext.Provider
			value={{
				activeIndex,
				setActiveIndex,
				page,
				isPreviewActive,
				setIsPreviewActive,
				projectList,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};
export const useMyContext = () => {
	const context = useContext(MyContext);
	if (context === undefined) {
		throw new Error('useMyContext must be used within a MyProvider');
	}
	return context;
};
