import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = { id: nanoid(), name: name, age: age }
        this.props.add(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h2>这是Person组件,上面组件的求和为：{this.props.qiuhe}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入姓名' />
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson} >添加一个人</button>
                <ul>
                    {this.props.yiduirens.map((yiduiren) => {
                        return <li key={yiduiren.id}>name:{yiduiren.name} ### age:{yiduiren.age}</li>
                    })}

                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        yiduirens: state.rens,
        qiuhe: state.he
    }),
    {
        add: addPersonAction
    }
)(Person)

