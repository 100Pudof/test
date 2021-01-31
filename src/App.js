import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import './App.scss';
import Slider from './components/Slider.jsx';
import Login from './components/formik';
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from './redux/action/action';
import { date } from 'yup/lib/locale';
import List from './components/list';
import { Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const point = useSelector((state) => state.items.point.Quotes);
  const { isAuth } = useSelector((state) => state.isAuth);
  const count = useSelector(state => state.items.count)
  


  React.useEffect(() => {
    dispatch(getItems());
  }, [])

  


  return (
    <div className="wrapper_price">

      {isAuth
        ? <Route exact path='/' component={Login} />
        : <div>
          <button className="exit"> Выйти   </button>

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
                <span className="favorites_text"> Добавлено в Избранное: <span className="span_count">{count}</span> рейсов</span>
              </div>
              <div className="price_flight">
                <div className="flight_item">

                  <ul className="ul_fat">
                    {point
                      ? point.map((quotes, index) => (
                        <List
                          index={index}
                          {...quotes}
                        />
                      ))
                      : ''}
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
