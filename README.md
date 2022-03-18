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

### 이지수


## 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
