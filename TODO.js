import React from 'react';

const TODO = () => {
  function editBtn(ele1) {
    var val = ele1.parentNode.firstChild.nodeValue;
    var editVal = prompt('Enter Edit Value', val);
    ele1.parentNode.firstChild.nodeValue = editVal;
  }

  function delete_All() {
    var orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
  }

  function deleteBtn(ele2) {
    console.log('Delete', ele2.parentNode.remove());
  }

  function Add_Task() {
    var orderList = document.getElementById('orderList');
    var inp = document.getElementById('inp-input').value;
    var crList = document.createElement('li');
    crList.setAttribute('id', 'liStyle');
    var txtNode = document.createTextNode(inp);
    var addBtn = document.createElement('button');
    addBtn.addEventListener('click', function () {
      editBtn(this);
    });
    addBtn.innerHTML = 'Edit';
    var delBtn = document.createElement('button');
    delBtn.addEventListener('click', function () {
      deleteBtn(this);
    });
    delBtn.innerHTML = 'Delete';
    crList.appendChild(txtNode);
    crList.appendChild(addBtn);
    crList.appendChild(delBtn);
    orderList.appendChild(crList);

    document.getElementById('inp-input').value = '';
  }

  return (
    <div>
    <center>
      <h1>TO_DO APPLICATION</h1>
      <div id="main_div">
        <input placeholder="Enter TO_DO List" type="text" id="inp-input" />
        <button id="fron2Btn" onClick={Add_Task}>
          Add Item
        </button>
        <button id="fron2Btn" onClick={delete_All}>
          Delete All
        </button>
        <ol id="orderList"></ol>
      </div>
      </center>
    </div>
  );
};

export default TODO;
