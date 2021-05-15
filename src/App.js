import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { getItems } from './redux/action/action';
import { useDispatch, useSelector } from 'react-redux'
import { exit } from './redux/action/action';
import './App.scss';
import DatePicker from 'react-date-picker';
import Slider from './components/Slider.jsx';
import Login from './components/formik';
import List from './components/list';

function App() {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const point = useSelector((state) => state.items.point.Quotes);
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  const count = useSelector(state => state.items.id)

  const isAuthFalse = () => {
    dispatch(exit())
  }
  React.useEffect(() => {
    dispatch(getItems());
  }, [dispatch])

  return (
    <div className="wrapper_price">

      {!isAuth
        ? <Route exact path='/' component={Login} />
        : <div>
          <div className="exit_block">
            <button onClick={isAuthFalse} className="exit"> Выйти   </button>
            <div className="svg_exit">
            <svg  width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H8" stroke="#1157A7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 16L20 11L15 6" stroke="#1157A7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 11H8" stroke="#1157A7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </div>
          </div>

          <div className="container_price">
            <div className="center_block">
              <div className="title_top">
                <div className="title_top-text">
                  <span>Вылеты &nbsp; <span><svg width="8" height="17" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9.66667 9.66667L1 18.3333" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  </span> &nbsp; SVO - JFK</span>
                  <div className="date">
                    <DatePicker
                      onChange={onChange}
                      value={value}
                    />
                  </div>
                </div>
              </div>
              <div className="carousel_image">
                <Slider />
              </div>
              <div className="favorites_count">
                { count.length > 0 ? 
                <span className="favorites_text"> Добавлено в Избранное: <span className="span_count">{count.length}</span> </span>
                : <span className="favorites_text"> Добавьте в избранное</span> 
                }
              </div>
              <div className="price_flight">
                <div className="flight_item">
                  <ul className="ul_fat">
                    { point ? 
                      point.map((quotes, index) => (
                        <List
                          index={index}
                          {...quotes}
                          key={index}
                        />
                      ))
                      : '' 
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
