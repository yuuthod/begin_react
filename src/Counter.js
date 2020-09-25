import React, { Component } from 'react'

class Counter extends Component {
    state = {
        counter: 0
    };

    handleIncrease = () => {
        // setState는 단순히 상태를 바꿔달라고 요청을 해주고,
        // 성능적인 이유 때문에 상태가 바로 업데이트 되지 않고
        // 비동기적으로 업데이트가 됩니다.
        // 때문에 setSate를 여러변 요청하고 싶다면, 다시 화살표 함수를 써서 사용해야 합니다.
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
    };

    // 만약 업데이트가 되고 나서 어떤 작업을 하고 싶다면 다음과 같이 
    // setState의 두번째 파라미터에 콜백함수를 넣어줄 수도 있습니다.
    towice = () => {
        this.setState(
            {
                counter: this.state.counter + 1
            },
            () => {
                console.log(this.state.counter);
            }
        )
    }

    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }
 
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        );
    }
}

export default Counter
