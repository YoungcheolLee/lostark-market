# 로스트아크 거래소 with Create React App

로스트아크 API를 사용하여 거래소 검색 기능 구현

## 기술스택

- TypeScript
- ReactJS
- ReactRouter
- Axios

## 구현기능

### `선택한 검색옵션 색상 변경`

✔️ currentOption useState 생성
![currentOption_1](https://user-images.githubusercontent.com/107835019/224686849-54d63361-ad97-4162-9968-ce33f7307708.PNG)

✔️ 버튼 클릭 시 함수 이동
![currentOption_2](https://user-images.githubusercontent.com/107835019/224686854-f1779306-682e-43fc-8322-6ed166e576ab.PNG)

✔️ 이동한 함수에서 setCurrentOption에 선택한 버튼 데이터 추가 (첨부파일 기준 CategoryCode)
![currentOption_3](https://user-images.githubusercontent.com/107835019/224686855-3e7bdc34-1f61-403c-bc69-a83936f99025.PNG)

✔️ map함수 내에서의 버튼 데이터와 currentOption에 저장된 버튼 데이터가 일치한다면 클릭한 버튼의 className 변경
![currentOption_4](https://user-images.githubusercontent.com/107835019/224686856-80207b1c-e6ad-4ca8-86ab-5116b260ae25.PNG)
