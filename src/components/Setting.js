/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillSetting } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeBoolean,
  changeDashboardSize,
  changeItemSize,
  changeTitle,
} from '../store/settingSlice';

function Setting() {
  const {
    search,
    singleMove,
    showItemCnt,
    itemSize,
    dashboardSize,
    title,
    titleInput,
  } = useSelector((state) => state.setting);
  const [isSetting, setIsSetting] = useState(false);
  const dispatch = useDispatch();
  const handleBoolean = (action) => {
    dispatch(changeBoolean(action));
  };

  const handleSize = (e) => {
    dispatch(changeItemSize(e.target.value));
  };
  const handleTitle = (e, type) => {
    dispatch(changeTitle({ value: e.target.value, titleType: type }));
  };

  const handleDashboard = (e, type) => {
    dispatch(changeDashboardSize({ value: e.target.value, size: type }));
  };

  return (
    <StyledSection>
      <StyledDiv>
        <button
          type="button"
          onClick={() => {
            setIsSetting(!isSetting);
          }}
        >
          <AiFillSetting />
        </button>
      </StyledDiv>

      {isSetting && (
        <StyledUl>
          <StyledLi>
            <span>타이틀</span>
            <button
              onClick={() => {
                handleBoolean('title');
              }}
              type="button"
              className={title ? 'on' : 'off'}
            />
          </StyledLi>
          <StyledLi className="title" title={`${title}`}>
            <input
              type="text"
              value={titleInput.available}
              onChange={(e) => {
                handleTitle(e, 'available');
              }}
            />
            <input
              type="text"
              value={titleInput.selected}
              onChange={(e) => {
                handleTitle(e, 'selected');
              }}
            />
          </StyledLi>
          <StyledLi>
            <span>검색</span>
            <button
              onClick={() => {
                handleBoolean('search');
              }}
              type="button"
              className={search ? 'on' : 'off'}
            />
          </StyledLi>
          <StyledLi>
            <span>하나씩만 옮기기</span>
            <button
              onClick={() => {
                handleBoolean('singleMove');
              }}
              type="button"
              className={singleMove ? 'on' : 'off'}
            />
          </StyledLi>

          <StyledLi>
            <span>아이템 갯수 표시</span>
            <button
              onClick={() => {
                handleBoolean('showItemCnt');
              }}
              type="button"
              className={showItemCnt ? 'on' : 'off'}
            />
          </StyledLi>

          <StyledLi>
            <span>아이템크기</span>
            XS
            <input
              onChange={handleSize}
              type="radio"
              name="size"
              value="XS"
              checked={itemSize === 'XS'}
            />
            S
            <input
              onChange={handleSize}
              type="radio"
              name="size"
              value="S"
              checked={itemSize === 'S'}
            />
            M
            <input
              onChange={handleSize}
              type="radio"
              name="size"
              value="M"
              checked={itemSize === 'M'}
            />
          </StyledLi>

          <StyledLi className="dashboard">
            <div>
              <span>가로</span>
              <input
                type="number"
                onChange={(e) => {
                  handleDashboard(e, 'width');
                }}
                value={dashboardSize.width}
              />
              <span>px</span>
            </div>
            <div>
              <span>세로</span>
              <input
                type="number"
                onChange={(e) => {
                  handleDashboard(e, 'height');
                }}
                value={dashboardSize.height}
              />
              <span>px</span>
            </div>
          </StyledLi>
        </StyledUl>
      )}
    </StyledSection>
  );
}
const StyledSection = styled.section`
  position: absolute;
  top: 0px;
  right: 30px;
  width: 250px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;

  button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const StyledUl = styled.ul`
  border: solid 1px #ccc;
`;
const StyledLi = styled.li`
  border-bottom: solid 1px #ccc;
  padding: 20px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #33ff33;
  }
  .off {
    background-color: red;
  }

  &.title {
    display: ${({ title }) => (title === 'true' ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;

    input {
      border: solid 1px black;
      border-radius: 2px;
      padding: 5px 10px;
    }
    input + input {
      margin-top: 10px;
    }
  }

  &.dashboard {
    flex-direction: column;
    border-bottom: none;
    span {
      white-space: nowrap;
    }
    div {
      align-items: center;
      display: flex;
    }
    input {
      border: solid 1px #ccc;
      padding: 5px 10px;
      width: 80%;
      margin: 10px 10px;
    }
  }
`;

export default Setting;
