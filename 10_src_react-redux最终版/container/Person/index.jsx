import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const personObj = {
            id: nanoid(),
            name: this.nameNode.value,
            age: this.ageNode.value
        }
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h2>这是Person组件,上面组件的求和为：{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入姓名' />
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson} >添加一个人</button>
                <ul>
                    {this.props.persons.map((person) => {
                        return <li key={person.id}>name:{person.name} ### age:{person.age}</li>
                    })}

                </ul>
            </div>
        )
    }
}

export default connect(
    // 映射状态
    state => ({
        persons: state.persons,
        count: state.count,
    }),
    // 映射操作状态的方法
    {
        addPerson
    }
)(Person)

