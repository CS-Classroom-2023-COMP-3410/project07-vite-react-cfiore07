import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import ShoppingCart from './components/ShoppingCart';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Smartphone',
            description: 'Latest model with advanced features',
            price: 699,
            stock: 15,
            imageUrl: 'https://via.placeholder.com/300x150?text=Smartphone'
        },
        {
            id: 2,
            title: 'Laptop',
            description: 'Powerful laptop for work and gaming',
            price: 1299,
            stock: 8,
            imageUrl: 'https://via.placeholder.com/300x150?text=Laptop'
        },
        {
            id: 3,
            title: 'Headphones',
            description: 'Noise-cancelling wireless headphones',
            price: 249,
            stock: 23,
            imageUrl: 'https://via.placeholder.com/300x150?text=Headphones'
        },
        {
            id: 4,
            title: 'Smartwatch',
            description: 'Fitness tracking and notifications',
            price: 199,
            stock: 12,
            imageUrl: 'https://via.placeholder.com/300x150?text=Smartwatch'
        }
    ])

    const handleNavigate = (pageId) => {
        setCurrentPage(pageId);// This could be expanded to handle page transition animations
        // or to update browser history for back/forward navigation
    };// Render the appropriate page based on state
    const renderPage = () => {
        switch (currentPage) {
            case 'products':
                return <ProductsPage cart={cart} setCart={setCart} products={products} />;
            case 'profile':
                return <ProfilePage />;
            case 'home':
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <Header
                currentPage={currentPage}
                onNavigate={handleNavigate}
            />
            <main>
                {renderPage()}
            </main>

            <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 1000,
            }}>
                <ShoppingCart
                    cart={cart}
                    setCart={setCart}
                    products={products}
                    setProducts={setProducts}
                />
            </div>

            <footer style={{
                marginTop: '50px',
                padding: '20px',
                borderTop: '1px solid #eee',
                textAlign: 'center',
                color: '#666'
            }}>
                <p>React Multi-Page Application</p>
            </footer>
        </div>
    );
}
export default App;