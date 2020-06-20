import React from 'react'

class AgePage extends React.Component {
    render() {
    return <>
        <h4>Возраст</h4>
        <form onChange={this.props.handler}>
            <label>
                <input
                type='radio'
                name='age'
                value='1'
                />
                  От 18 до 21  
            </label>
            <label>
                <input
                type='radio'
                name='age'
                value='2' 
                />
                  От 22 до 27  
            </label>
            <label>
                <input
                type='radio'
                name='age'
                value='3' 
                />
                  От 28 до 34  
            </label>
            <label>
                <input
                type='radio'
                name='age'
                value='4' 
                />
                  От 35 до 45  
            </label>
            <label>
                <input
                type='radio'
                name='age'
                value='5' 
                />
                  От 46 до 60 
            </label>
            <label>
                <input
                type='radio'
                name='age'
                value='6' 
                />
                  более 60 лет 
            </label>
        </form>
        <button onClick={this.props.nextPage}>Далее</button>
        </>
    }
}

class ChildrenPage extends React.Component {
    render() {
    return <>
        <form onChange={this.props.handler}>
            <h4>Количество детей</h4>
            <label>
                <input
                type='radio'
                name='children'
                value='1'
                />
                  0  
            </label>
            <label>
                <input
                type='radio'
                name='children'
                value='2' 
                />
                  1  
            </label>
            <label>
                <input
                type='radio'
                name='children'
                value='3' 
                />
                  2 
            </label>
            <label>
                <input
                type='radio'
                name='children'
                value='4' 
                />
                  3 +
            </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        <button onClick={this.props.nextPage}>Далее</button>
        </>
    }
}

class MarriedPage extends React.Component {
    render() {
    return <>
        <form onChange={this.props.handler}>
            <h4>Семейное положение</h4>
            <label>
                <input
                type='radio'
                name='married'
                value='1'
                />
                  Состою в браке
            </label>
            <label>
                <input
                type='radio'
                name='married'
                value='2' 
                />
                  Не состою в браке
            </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        <button onClick={this.props.nextPage}>Далее</button>
        </>
    }
}

class EducationPage extends React.Component {
    render() {
    return <>
        <form onChange={this.props.handler}>
            <h4>Образование</h4>
            <label>
                <input
                type='radio'
                name='education'
                value='1'
                />
                  Отсутствует
            </label>
            <label>
                <input
                type='radio'
                name='education'
                value='2' 
                />
                  Среднее общее  
            </label>
            <label>
                <input
                type='radio'
                name='education'
                value='3' 
                />
                  Среднее специальное
            </label>
            <label>
                <input
                type='radio'
                name='education'
                value='4' 
                />
                  Высшее
            </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        <button onClick={this.props.nextPage}>Далее</button>
        </>
    }
}

class WorkTimePage extends React.Component {
    render() {
    return <>
        <form onChange={this.props.handler}>
            <h4>Стаж работы на текущей должности</h4>
            <label>
                <input
                type='radio'
                name='work_time'
                value='1'
                />
                  Менее 6 месяцев
            </label>
            <label>
                <input
                type='radio'
                name='work_time'
                value='2' 
                />
                  от 6 месяцев до 1.5 лет 
            </label>
            <label>
                <input
                type='radio'
                name='work_time'
                value='3' 
                />
                  от 1.5 до 3 лет
            </label>
            <label>
                <input
                type='radio'
                name='work_time'
                value='4' 
                />
                  более 3 лет
            </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        <button onClick={this.props.nextPage}>Далее</button>
        </>
    }
}

class WorkEqualsEducationPage extends React.Component {
    render() {
    return <>
        <form onChange={this.props.handler}>
            <h4>Вы работаете по профессии?</h4>
            <label>
                <input
                type='radio'
                name='work_equals_education'
                value='1'
                />
                  Да
            </label>
            <label>
                <input
                type='radio'
                name='work_equals_education'
                value='2' 
                />
                  Нет
            </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        <button onClick={this.props.nextPage}>Отправить</button>
        </>
    }
}

class SponsorsPage extends React.Component {
    render() {
    return <>
        <form onChange={this.props.handler}>
            <h4>У вас есть поручители?</h4>
            <label>
                <input
                type='radio'
                name='sponsors'
                value='1'
                />
                  Да
            </label>
            <label>
                <input
                type='radio'
                name='sponsors'
                value='2' 
                />
                  Нет
            </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        <button onClick={this.props.nextPage}>Далее</button>
        </>
    }
}

class IncomePage extends React.Component {
    render() {
    return <>
        <form onChange={this.props.handler}>
            <h4>Какой у вас доход?</h4>
            <label>
                <input
                type='radio'
                name='income'
                value='1'
                />
                  До 20 т.р.
            </label>
            <label>
                <input
                type='radio'
                name='income'
                value='2' 
                />
                  20 - 30 т.р.
            </label>
            <label>
                <input
                type='radio'
                name='income'
                value='3' 
                />
                  30 - 50 т.р
            </label>
            <label>
                <input
                type='radio'
                name='income'
                value='4' 
                />
                  50 - 100 т.р.
            </label>
            <label>
                <input
                type='radio'
                name='income'
                value='5' 
                />
                  от 100 т.р.
            </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        <button onClick={this.props.nextPage}>Далее</button>
        </>
    }
}

export {
    AgePage,
    ChildrenPage, 
    MarriedPage, 
    EducationPage, 
    WorkTimePage,
    WorkEqualsEducationPage,
    SponsorsPage,
    IncomePage
}