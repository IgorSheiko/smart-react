import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'formsy-react';
import { createStructuredSelector } from 'reselect';
import InputControl from 'components/InputControl';
import FormWrapper from 'containers/ForgotPasswordForm/FormWrapper';
import Draggable from 'react-draggable'; // The default
import Sortable from 'react-sortablejs';
import uniqueId from 'lodash/uniqueId';
import Room from 'containers/Room';
import { getSystemListRequest, saveProjectrequest, getRoomCategoriesRequest } from 'pages/NewProjectPage/actions';
import { makeSystemListData, makeRoomCategoriesData } from 'pages/NewProjectPage/selectors';

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cloneUncontrolled: ['Apple', 'Banana', 'Cherry', 'Guava', 'Grape', 'Kiwi', 'Lemon', 'Melon', 'Orange', 'Pear', 'Peach', 'Strawberry'],
        roomList: [],
        itemsInRoom: {},
        systemList: [],
    };
     this.onAddBtnClick = this.onAddBtnClick.bind(this);
     this.setItemsInRoom = this.setItemsInRoom.bind(this);
     this.saveProject = this.saveProject.bind(this);
     this.getSystemsIds = this.getSystemsIds.bind(this);
     this.combineData = this.combineData.bind(this);
  }

  componentDidMount(){
    this.props.getRoomCategoriesRequest();
    this.props.getSystemListRequest();
  }

  onAddBtnClick() {
      const roomList = [...this.state.roomList,<Room key={`${this.state.roomList.length}`}
                                                     name={`${this.state.roomList.length}`}
                                                     categories={this.props.roomCategories}
                                                     setNewItem={this.setItemsInRoom}/> ];

      this.setState({
          roomList,
      });
    }

  setItemsInRoom(name, data) {
    const itemsInRoom = this.state.itemsInRoom;
    const ids = this.getSystemsIds(data);
    itemsInRoom[name] = {"systems": ids};
    this.setState({
          itemsInRoom,
      });
  }

  getSystemsIds(data){
    return data;
  }

  saveProject(data) {
    const obj = {};
    const rooms = this.combineData(this.state.itemsInRoom, data.room_type)
    obj.rooms = rooms;
    obj.project_name = data.project_name;
    this.props.saveProjectrequest(obj);
  }

  combineData(items, types){
    for (const key in types) {
      items[key]['room_category_id'] = types[key]
    }
    return items;
  }

  render() {
    const cloneUncontrolled = this.props.systemList.map((item, index) => (
      <li key={item.id} data-name={item.id} data-id={item.system_name}>{item.system_name}</li>
    ));

    return (
      <Form onSubmit={this.saveProject}>
        <div>
          <InputControl
            placeholderText="Name"
            className="form-group"
            inputClassName="form-control"
            title="Название проекта"
            value=""
            name="project_name"
            required
          />
          <h4>Выберите системы, которые хотите установить.</h4>
          <div className="row">
            <div className="col-sm-3">
              <Sortable
                name='test'
                options={{
                  animation: 150,
                  sort: false,
                  group: {
                    name: 'all',
                    pull: 'clone',
                    put: false
                  }
                }}
                className="block-list"
                tag="ul"
              >
                {cloneUncontrolled}
              </Sortable>

              <div className="form-group mt20">
                <div className="">
                  <button type='button' className='btn btn-danger-dark' onClick={this.onAddBtnClick}>Добавить комнату</button>
                </div>
              </div>

            </div>

            <div className="col-sm-6">
              {this.state.roomList.map(function(input, index) {
                      return input;
                  })}
            </div>

          </div>
        </div>

        <div className="form-group mt20">
          <div className="col-sm-offset-3 col-sm-7">
            <button type='submit' className='btn btn-danger-dark' >Сохранить и получить информацию</button>
          </div>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  systemList: makeSystemListData(),
  roomCategories: makeRoomCategoriesData(),
});

export default connect(mapStateToProps, { getSystemListRequest, saveProjectrequest, getRoomCategoriesRequest })(House);
