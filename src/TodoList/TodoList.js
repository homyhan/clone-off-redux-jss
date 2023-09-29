import React, { Component } from 'react';
import { Container } from '../Components/TodoList/Container';
import {ThemeProvider} from 'styled-components';
import { TodoListDarkTheme } from '../Themes/TodoList/TodoListDarkTheme';
import { TodoListLightTheme } from '../Themes/TodoList/TodoListLightTheme';
import { TodoListPrimaryTheme } from '../Themes/TodoList/TodoListPrimaryTheme';
import {Dropdown} from '../Components/TodoList/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../Components/TodoList/Heading';
import {TextField} from '../Components/TodoList/TextField';
import {Button} from '../Components/TodoList/Button';
import {Table, Thead, Tbody, Tr, Td, Th} from '../Components/TodoList/Table';

class TodoList extends Component {
    render() {
        return (
            <ThemeProvider theme={TodoListDarkTheme}>
                <Container className='w-50'>
                    <Dropdown>
                        <option>Dark theme</option>
                        <option>Light theme</option>
                        <option>Primary theme</option>
                    </Dropdown>
                    <Heading3>TO DO LIST</Heading3>
                    <TextField label="Task name" className="w-50"></TextField>
                    <Button className='ms-2'><i className="fa fa-plus"></i> Add Task</Button>
                    <Button className='ms-2'><i className="fa fa-edit"></i> Update Task</Button>
                    <hr></hr>
                    <Heading3>Task To Do</Heading3>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Task name</Th>
                                <Th className='text-end'>
                                    <Button><i className="fa fa-edit"></i> </Button>
                                    <Button><i className="fa fa-check"></i> </Button>
                                    <Button><i className="fa fa-trash"></i> </Button>
                                </Th>
                            </Tr>
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        );
    }
}

export default TodoList;