import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'Naira'};
    return (
        <section className = "home">
            <div className = "home-content">
                <header className='home-header'>
                    <HeaderBox 
                      type="greeting"
                      title="Welcome"
                      user={loggedIn?.firstName || 'Guest'}
                      subtext="Access and manage your account and transactions efficiently."                
                    />

                    <TotalBalanceBox 
                      accounts={[]}
                      totalBanks={1}
                      totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSidebar
              user={loggedIn}
              transactions={[]}
              banks={[{currentBalance: 1356.50}, {currentBalance: 10032.50}]}
            />
        </section>
    )
}
export default Home