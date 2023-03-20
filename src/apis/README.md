# apis

Backend와 통신하기 위한 api 가 정의 되어있는 폴더 입니다.

## 📁 Folder Structure

    ├── apis                    
        ├── _axios                    # axios 인스턴스 생성 및 관리
        ├── _toss                     # toss 인스턴스 생성 및 관리
        ├── cart                      # 장바구니 관련 API Class
        ├── type.d.ts                 # API 관련 type 선언 
        └── ...
    └── ...
## File Naming

파일명은 폴더명(태그명) + Api 에 종류별로 suffix 를 붙여 구분해줍니다.PascalCase 로 작성해주세요

**apis/[folder-name]**

- [FolderName]Api.ts:

axios 를 사용하여 네트워크 통신을 처리하는 api 입니다.

- [FolderName]Api.query.ts:

Post.api.ts 에서 GET method 에 해당하는 함수를 React-Query 의 useQuery 으로 랩핑한 커스텀 훅의 집합입니다

- [FolderName]Api.mutation.ts:

Post.api.ts 에서 POST, PUT, PATCH , DELETE 요청에 해당하는 함수를 React-Query 의 useMutation 으로 랩핑한 커스텀 훅의 집합입니다

- [FolderName]Api.type.ts:

해당 api 경로에서 사용되는 데이터 타입의 집합입니다.