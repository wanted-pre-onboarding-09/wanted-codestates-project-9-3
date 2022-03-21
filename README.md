# 로그프레소
## 프로젝트 소개

- 듀얼 셀렉터 구현하기
- 기간: 22.03.16~22.03.17

## 배포링크

[🚀 배포 링크](https://logpreesso-9.netlify.app/)

## 실행 방법

```
① 해당 레포지토리를 클론한다.
② 프로젝트의 패키지를 설치한다. (npm install)
③ scripts 명령어로 프로젝트를 실행한다. (npm start)
```

## 팀원 소개

| 이름   | 직책 | 역할                 |
| ----- | -- | -------------------- |
| [윤솔비](https://github.com/y-solb) | 팀장 | ButtonTab |
| [유송현](https://github.com/ysh2987) | 팀원 | option control |
| [서한석](https://github.com/holystorySeo) | 팀원 | SearchBar |
| [손영산](https://github.com/zeromountain) | 팀원 | multi selection |
| [조영제](https://github.com/youngjeJO) | 팀원 | dual selector |
| [이지수](https://github.com/mynameisjisoo) | 팀원 | option control |


## 기술 스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
<br/>

## 요구사항

```
- 아이템 순서 이동
- 아이템 검색 : On일 때만 가능
- 아이템 이동 버튼 : 선택된 아이템만 이동, 모든 아이템 이동, 초기화
- 타이틀 제목 수정 : On일 때만 가능
- 하나씩만 옮기기 : ON일 때 동시에 여러 개 선택 불가능, OFF일 때 동시에 여러 개 선택 가능
- 선택된 아이템 개수 : ON일 때만 나타남
- 아이템 크기 조정 (XS, S, M)
- 영역 크기 조절
- 다중 선택 : shift키를 누르면 시작부터 끝까지 선택, control(맥은 command)를 누르면 동시에 다중 선택 가능 
```

### 유송현

### 서한석
- 검색 컴포넌트 구현
  - 듀얼 셀렉터 왼쪽/오른쪽 검색 기능에 모두 동일 컴포넌트 재사용
  - section props로 구분
  
    ```jsx
       <SearchBar section="left" />
       <SearchBar section="right" />
    ```
    <img src="https://user-images.githubusercontent.com/87353284/158937078-899f6a8b-bbb8-43d8-952e-0b195b5c551b.gif" width="40%">

- 왼쪽 셀렉터 검색 기능 알고리즘 구현(feat. 리덕스 리듀서 함수, 파일명: optionSlice.js, 리듀서: updateLeftSearch)
  - 오른쪽 셀렉터에 아무것도 없는 경우: 초기 옵션중을 filter함수로 순회하여 검색어 포함 여부 indexOf로 판별
  - 오른쪽 셀렉터에 요소가 있는 경우: 1)초기 옵션에서 오른쪽 셀렉터 요소 필터 2)필터 후 남은 요소 중에서 검색어 포함 여부 indexOf로 판별
  - 함수 체이닝으로 변수 선언 줄이고 코드 간결화
	  <details>
		<summary>왼쪽 셀렉터 검색 기능 코드 자세히 보기</summary>

		```jsx
		  availableOptions: emojiMenus, /* 왼쪽 셀럭터 옵션 */
		  selectedOptions: [], /* 오른쪽 셀럭터 옵션 */

		  updateLeftSearch(state, action) {
		    // 오른쪽 옵션에 아무것도 없는 경우
		    if (state.selectedOptions.length === 0) {
		      state.availableOptions = [
			  ...emojiMenus.filter((option) => {
			    return option.name.indexOf(action.payload) !== -1;
			  }),
			];
		    } else {
		      /* 오른쪽 옵션에 요소가 있는 경우 */
			const newArr = emojiMenus
			  .filter((option) => {
			    return (
			      state.selectedOptions
				.map((el) => {
				  return el.name;
				})
				.indexOf(option.name) === -1
			    );
			  })
			  .filter((option) => {
			    return option.name.indexOf(action.payload) !== -1;
			  });

			state.availableOptions = [...newArr];
		      }
		    },
		```
	  </details>

- 오른쪽 셀렉터 검색 기능 알고리즘 구현(feat. 리덕스 리듀서 함수, 파일명: optionSlice.js, 리듀서: updateRightSearch)
  - 왼쪽 셀렉터에 아무것도 없는 경우: 오른쪽 셀렉터를 filter함수로 순회하여 검색어 포함 여부 indexOf로 판별
  - 왼쪽 셀렉터에 요소가 있는 경우: 1)초기 옵션에서 왼쪽 셀렉터 요소 필터 2)필터 후 남은 요소 중에서 검색어 포함 여부 indexOf로 판별
  - 함수 체이닝으로 변수 선언 줄이고 코드 간결화
	  <details>
		<summary>오른쪽 셀렉터 검색 기능 코드 자세히 보기</summary>

		```jsx
		  availableOptions: emojiMenus, /* 왼쪽 셀럭터 옵션 */
		  selectedOptions: [], /* 오른쪽 셀럭터 옵션 */

		   updateRightSearch(state, action) {
		      // 왼쪽 옵션에 아무것도 없는 경우
		      if (state.availableOptions.length === 0) {
			state.selectedOptions = [
			  ...emojiMenus.filter((option) => {
			    return option.name.indexOf(action.payload) !== -1;
			  }),
			];
		      } else {
			const newArr = emojiMenus
			  .filter((option) => {
			    return (
			      state.availableOptions
				.map((el) => {
				  return el.name;
				})
				.indexOf(option.name) === -1
			    );
			  })
			  .filter((option) => {
			    return option.name.indexOf(action.payload) !== -1;
			  });

			state.selectedOptions = [...newArr];
		      }
		    },
		```
	  </details>
### 손영산

- 단일 클릭
    - 선택한 요소가 선택된 요소의 인덱스가 동일한지에 따라
    - 동일한 경우 - 선택된 요소 해제
    - 동일하지 않은 경우 - 기존 선택된 요소 해제하고 새로 선택된 요소 선택
- ctrl, cmd 클릭
    - moveOnlyOne 의 상태에 따라서 실행 여부 결정
    - 누적 선택이 가능하므로 같은 요소를 선택하지 않았다면 기존 선택된 요소들과 새로 선택된 요소를 병합
- shift 클릭
    - moveOnlyOne의 상태에 따라서 실행 여부 결정
    - 선택된 요소의 첫 요소와 끝 요소를 기준으로 영역 결정
        - 선택된 요소가 마지막 요소의 인덱스보다 큰 경우 마지막 요소부터 선택된 요소까지 선택 영역 지정하고 추가
        - 선택된 요소가 첫번째 요소의 인덱스보다 큰 경우 첫번째 요소부터 선택된 요소까지 선택 영역 지정하고 추가
        - 선택된 요소가 첫번째 요소의 인덱보다 작은 경우 첫번째 요소부터 선택된 요소까지 선택 영역 지정하고 추가
- 인덱스를 기반으로 등록하기 때문에 정렬 상태가 중요하다고 생각되어서 리듀서에서 중복된 요소를 제거하고 오름차순으로 정렬되도록 설정
- 다중 선택을 할 때 엣지 케이스가 많았는데 모든 상황에 대응하지 못했던 부분이 아쉬웠고, 알고리즘적인 부분에서 역량이 부족하다고 생각되었기 때문에 앞으로 보완해 나갈 계획

```js
// 단일 선택
  const normalSelection = (index) => {
    if (selectedSelection.includes(index)) {
      // 같은 요소인 경우
      const selected = selectedSelection.filter((item) => item !== index);
      dispatch(setSelection({ type, index: selected }));
    } else {
      // 다른 요소인 경우
      dispatch(setSelection({ type, index: [index] }));
    }
  };

  // 중복 선택 - cmd, ctrl
  const multiSelectionScatter = (index) => {
    if (moveOnlyOne) return;
    if (selectedSelection.includes(index)) {
      const selected = selectedSelection.filter((item) => item !== index);
      dispatch(setSelection({ type, index: selected }));
    } else {
      const selected = [...selectedSelection, index];
      dispatch(setSelection({ type, index: selected }));
    }
  };

  // 중복 선택 - shift
  const multiSelectionLinear = (index) => {
    if (moveOnlyOne) return;

    let selected = [];
    const { length } = selectedSelection;
    const start = length === 0 ? 0 : selectedSelection[0];
    const end = selectedSelection[length - 1];

    if (end < index) {
      for (let i = end; i <= index; i += 1) {
        selected.push(i);
      }
      selected = [...selectedSelection, ...selected];
    } else if (start < index) {
      for (let i = start; i <= index; i += 1) {
        selected.push(i);
      }
      selected = [...selectedSelection, ...selected];
    } else {
      for (let i = start - 1; i >= index; i -= 1) {
        selected.unshift(i);
      }
      selected = [...selected, ...selectedSelection];
    }
    dispatch(setSelection({ type, index: selected }));
  };
```

```js
// 선택 영역 설정 리듀서
setSelection(state, { payload: { type, index } }) {
      const set = new Set(index); // 중복 요소 제거
      if (type === 'available') {
        state.availableSelection = [...set].sort((a, b) => a - b);
      } else {
        state.selectedSelection = [...set].sort((a, b) => a - b);
      }
    },
```

### 윤솔비
- ButtonTab에서 클릭된 버튼에 따라 초기화, 모든 아이템 이동, 선택된 아이템만 이동하도록 구현했습니다.
- 초기화 클릭 시 availableOptions에 emojiMenus를 넣어주고 selectedOptions에 빈 배열을 넣어 초기화시켜줬습니다.
- 모든 아이템 이동을 클릭 시 spread 연산자를 통해 availableOptions와 selectedOptions 배열을 병합해 줬습니다.
- 선택된 아이템만 이동 클릭 시 availableSelection 또는 selectedSelection에 선택된 아이템들의 index값이 저장됩니다. 이 index값을 통해 선택된 아이템들의 배열을 만들고 이동하고자 하는 위치의 배열과 병합해 줬습니다. 기존의 데이터에서는 선택된 아이템들을 제거해 줘야 하기 때문에 아래와 같이 구현했습니다.

```jsx
const filteredData = Object.keys(state.selectedOptions)
          .filter((key) => !state.selectedSelection.includes(Number(key)))
          .reduce((obj, key) => {
            obj[key] = state.selectedOptions[key];
            return obj;
          }, [])
	  .filter((el) => {
          return el != null;
        });
```

### 조영제
- drag & drop을 사용한 아이템 순서 이동을 구현했습니다. 구현 과정에서 item의 index를 저장할 때 useState가 아닌 hook에서 component 안에 변수를 조회나 수정할 수있는 useRef의 사용법을 알게 되었고 drag event가 발생하면서 item의 변화하는 index 값을 리랜더 되지 않고 받을 수 있었습니다.
- drag & drop을 구현하면서 하나의 에러가 있었는데 dual selector를 페이지를 구성할 때 list component를 재사용하는 하게 되었는데 이 과정에서 onDragEnter가 다른 구역에서도 함수를 호출 해 순서를 바꾸게 되는 에러였습니다. 처음에는 재사용된 컴포넌트여서 생긴 문제라 생각하고 section마다 다른 함수를 주기도하고, 새로운 컴포넌트를 만들기도 했었지만 어떤 방식이던 결국 dragEnter가 양 옆에서 동일하게 적용이 되고 있는것을 발견했고 useRef를 이용해 boolaen 값을 가진 변수를 만들어 dragStart와 mouseleave에 해당 component에서 true일 때만 작동을 하고 false 일 때는 return을 해 에러를 고칠 수 있었습니다.
```


  const onDragEnter = (e, index) => {
    if (selectContainer.current) {
      dragOverItemIndex.current = index;	//drag 중 위치를 알려주는 index
      const copyListItems = [...options];	//초기 배열 값 복사
      const dragItemContent = copyListItems[dragItemIndex.current];	//dragStart한 item
      copyListItems.splice(dragItemIndex.current, 1);	//dragStart한 item 제거
      copyListItems.splice(dragOverItemIndex.current, 0, dragItemContent);	//dragStart한 item 추가
      dragItemIndex.current = dragOverItemIndex.current; 
      dragOverItemIndex.current = null; 	// 순서가 하나씩 보이게 만들 수 있도록 index값을 계속 넘겨주고 지워줌
      if (section === 'left') {
        dispatch(changeAvailableOptions(copyListItems));
      } else {
        dispatch(changeSelectedOptions(copyListItems));
      }
    } else {
      return {};
    }
  };

```
### 이지수
- 소메뉴의 버튼 클릭에 따라 reducer를 통해 on, off 를 변경하고 `title`이나 `itemSize` 등 사용자가 입력하는 값도 redux에 저장했습니다.
- 제목을 변경하는 경우 왼쪽 셀렉터와 오른쪽 셀렉터 모두 동일한 `Title` 컴포넌트를 재사용하기 때문에 사용자가 입력한 값을 `titleInput`이라는 객체 형태로 store에 저장했습니다.
  최상위인 `App.js`에서는 store의 `titleInput`객체를 가져오고 `List` 컴포넌트로는 `titleInput.available`과 `titleInput.selected` 를 나누어서 전달하여 각각 맞는 제목이 보여지게 했습니다.
- 아이템 크기 조절은 `OptionItem` 컴포넌트에서 redux store의 `itemSize`를 호출하고 `styled-component`의 `props`로 전달하여 `props`에 따라 `font-size`를 변경했습니다.

## 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
