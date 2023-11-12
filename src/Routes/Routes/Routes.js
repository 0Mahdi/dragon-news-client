import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Category from '../../Pages/Category/Category/Category';
import News from '../../Pages/News/News/News';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import TermsAndCodition from '../../Pages/Others/TermsAndCondition/TermsAndCodition';
import Profile from '../../Pages/Others/Profile/Profile';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-theta-jade.vercel.app/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) =>fetch(`https://dragon-news-server-theta-jade.vercel.app/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-theta-jade.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/terms',
                element: <TermsAndCodition></TermsAndCodition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
]);
