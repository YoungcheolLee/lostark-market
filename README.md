# 로스트아크 거래소 with Create React App

로스트아크 API를 사용하여 거래소 검색 기능 구현

## 기술스택

- TypeScript
- ReactJS
- ReactRouter
- Axios

## 구현기능

### 선택한 검색옵션 색상 변경 구현 과정

1. currentOption useState 생성

![currentOption_1](https://user-images.githubusercontent.com/107835019/224686849-54d63361-ad97-4162-9968-ce33f7307708.PNG)

2. 버튼 클릭 시 함수 이동

![currentOption_2](https://user-images.githubusercontent.com/107835019/224686854-f1779306-682e-43fc-8322-6ed166e576ab.PNG)

3. 이동한 함수에서 setCurrentOption에 선택한 버튼 데이터 추가 (첨부파일 기준 CategoryCode)

![currentOption_3](https://user-images.githubusercontent.com/107835019/224686855-3e7bdc34-1f61-403c-bc69-a83936f99025.PNG)

4. map함수 내에서의 버튼 데이터와 currentOption에 저장된 버튼 데이터가 일치한다면 클릭한 버튼의 className 변경

![currentOption_4](https://user-images.githubusercontent.com/107835019/224686856-80207b1c-e6ad-4ca8-86ab-5116b260ae25.PNG)

<hr />

### 검색결과 pagination 구현 과정

1. SearchResult.tsx

- getTotalPageNumber 함수 정의
- client에서 선택한 옵션의 총 데이터와 한 페이지당 보여지는 수 나눈 결과 값을 올림하여 총 페이지 수를 구하는 함수 생성

2. SearchResult.tsx

- makePageButton 함수 정의
- 총 페이지 수를 숫자배열에 담아 반환하는 함수 생성

3. SearchResult.tsx

- makePageButton().map 함수 사용
- 2번의 makePageButton의 배열 값을 map을 함수를 통해 화면에 출력

4. SearchResult.tsx

- 페이지 버튼 클릭 시 handleClickPageButton(item) 함수 실행
- client에서 선택한 pageNo를 매개변수를 통해 전달
- props의 onClickPageButton(pageNo) 를 통해 부모 컴포넌트인 Router.tsx, Main.tsx 에 전달

5. Router.tsx, Main.tsx

- handleClickPageButton(pageNo) 함수를 통해 pageNo를 함수의 매개변수를 통해 전달받음

6. Main.tsx

- currentPage, setCurrent란 state 정의
- handleClickPage 함수 정의
- handleClickPage 함수에서 매개변수로 전달받은 pageNo를 setCurrentPage의 매개변수로 pageNo를 담아줌

7. Header.tsx

- Header.tsx에 props로 pageNo인 currentPage를 전달받음
- useEffect() 구문을 추가하고 디펜던시어레이에 props를 넣어 props 변화를 감지
- PageNo에 props로 전달받은 currentPage를 할당 하고 HTTP 통신하여 다시 SearchResult 페이지를 그려주어 client에서 선택한 페이지의 데이터를 출력
