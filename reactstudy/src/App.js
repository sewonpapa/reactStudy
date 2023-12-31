import './App.css';
import Header from './module/Header';
import DayList from './module/DayList';
import Day from './module/Day';
import EmptyPages from './module/EmptyPages';
import CreateWord from './module/CreateWord';
import CreateDay from './module/CreateDay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<DayList />} />
                    <Route path="/day/:day" element={<Day />} />
                    <Route path="/createWord" element={<CreateWord />} />
                    <Route path="/createDay" element={<CreateDay />} />
                    <Route path="*" element={<EmptyPages />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
