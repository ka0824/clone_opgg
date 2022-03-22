import React from 'react';
import '../../css/Main.css';

const Header = () => {
    const navList: string[] = ['홈', '챔피언 분석', '칼바람', 
    '우르프', '통계', '랭킹', '프로관전', '멀티서치',
    'OP설', '커뮤니티'];

    return (
        <div className="header-box">
            <div className="route-box">
                <div className="route-list">
                    {navList.map((nav, idx) => {
                        return <a href='/' className={`nav-00${idx}`} key={`nav-00${idx}`}>{nav}</a>                
                    })}
                </div>
            </div>
            <div className="notice-box">
                <a className="notice-text" href="/">롤 듀오, 클랜을 찾고 있다면? [DUO.OP.GG]</a>
            </div>
        </div>
    )
}

export default Header;