import { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart/Cart';
import News from './components/News/News';

function App() {
  // const items = [
  //   {
  //     id: 1,
  //     title: 'Learn more and be honest',

  //     img: 'https://ouch-cdn2.icons8.com/EnUxpMnQsSWxh9DobCEC770w7tqCVkn2pgeU70eDJug/rs:fit:784:588/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzI4/L2Q4YTMxNDY1LWE3/NWItNDIwOS05YzBm/LWJlNjczYjZmMzI4/Mi5wbmc.png',

  //     description: 'A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.'
  //   },
  //   {
  //     id: 2,
  //     title: 'Hurry up! Start Now!',

  //     img: 'https://ouch-cdn2.icons8.com/32WBVW1nyu-R0xxVIipU-FEp856ezcPBjmshSyfrwx4/rs:fit:784:784/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTA3/L2FlZjQ4NmM4LTAz/NTYtNGRhNS04ZWQ2/LTBhMGIzMzdhZjNm/Mi5zdmc.png',

  //     description: 'A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.'
  //   },
  //   {
  //     id: 3,
  //     title: 'Make beautiful plane',

  //     img: 'https://ouch-cdn2.icons8.com/8i5VOSfGHddDXVRBoy_qKNDumqhDGH6LDE41sOrHGEU/rs:fit:784:588/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDMx/LzBlYmNhNGRlLTkz/MmItNDE2NS04OTEy/LTEzMjlmMjgyMmZm/OC5zdmc.png',

  //     description: 'A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.'
  //   },
  //   {
  //     id: 4,
  //     title: 'Go hunt your dream',

  //     img: 'https://ouch-cdn2.icons8.com/mNmgaMeWfaOPnMGhtgPx2bSw9nIrR1vcw-at5IesXeI/rs:fit:784:784/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzEv/OGE2YTZiZTEtZGY2/Yy00ODJlLThmMDUt/MmUwODlhYjA4M2Y1/LnN2Zw.png',

  //     description: 'A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.'
  //   },
  //   {
  //     id: 5,
  //     title: 'Develop your skill and enjoy it',

  //     img: 'https://ouch-cdn2.icons8.com/eaVhwWGtwsibeBQsjRRfcPJmf9L1wr46n7oCJhHXkmE/rs:fit:784:588/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTU5/LzhkNGY3YjRlLTQz/M2EtNDliMi04ZTQ5/LTVmOWY1MWU3OTM1/MC5zdmc.png',

  //     description: 'A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.'
  //   },
  //   {
  //     id: 6,
  //     title: 'Keep distance, stay safe',

  //     img: 'https://ouch-cdn2.icons8.com/sQFi2z-HqvjDywi8S5TiGTvyM395blHeam6t2XjAWAA/rs:fit:784:784/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODc4/LzIyOGY1YWFjLTI3/OGYtNDAwYi1hMjNm/LWMzZjBhYjhjNGZj/MC5wbmc.png',

  //     description: 'A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.'
  //   },
  // ]
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=8702d04648ec48eea36b3fe31703b219')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      {
        news.length === 0 ?
          <Spinner animation="border" variant="primary" />
          :
          // <div className='cart-container'>
          //   <h1>Explore React Bootstrap</h1>
          //   <div className="row row-cols-1 row-cols-md-3 g-4">
          //     {
          //       items.map(item => <Cart key={item.id} item={item}></Cart>)
          //     }
          //   </div>
          // </div>
          <Row xs={1} md={3} className="g-4">
            {
              news.map(nw => <News news={nw}></News>)
            }
          </Row>
      }
    </div>
  );

}

export default App;
