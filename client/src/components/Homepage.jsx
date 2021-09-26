import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Crypto, News, Loader } from '.'

const { Title} = Typography

const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(10);
    
    const globalStats =data?.data?.stats
  if(isFetching) return <Loader/> 
  console.log(data)
    return (
        <>
           <Title level={2} className="heading"> Global Crypto Statistics</Title>
           <Row>
               <Col span= {12}><Statistic title= "Total Cryptocurrencies" value= {globalStats.total}/></Col>
               <Col span= {12}><Statistic title= "Total Exchanges" value= {millify(globalStats.totalExchanges)}/></Col>
               <Col span= {12}><Statistic title= "Total Market Cap" value= {millify(globalStats.totalMarketCap)}/></Col>
               <Col span= {12}><Statistic title= "Total Market" value= {millify(globalStats.totalMarkets)}/></Col>
               <Col span= {12}><Statistic title= "Total 24h Volume" value= {millify(globalStats.total24hVolume)}/></Col>
           </Row>
           <div className="home-heading-container">
               <Title level={2} className="home-title">Top Cryptos By MarketCap </Title>
               <Title level={3} className="show-more"><Link to ="/cryptos">Display More</Link></Title>
           </div>
           <Crypto simplified/>
           <div className="home-heading-container">
               <Title level={2} className="home-title">Lastest Crypto News </Title>
               <Title level={3} className="show-more"><Link to ="/news">Display More</Link></Title>
           </div>
           <News simplified/>

        </>
    )
}

export default Homepage
