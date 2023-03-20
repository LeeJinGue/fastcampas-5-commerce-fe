# styles
`Color`, `font` 등 기본 테마와 `Chakra-Ui`에서 사용하는 컴포넌트를 커스텀한 내용이 담겨있는 폴더입니다.

# 📁Folder Structure

    .
    ├── ...
    ├── styles
    │   └── theme
    │       ├── index.ts                   # 커스텀한 테마를 모아서 extendTheme
    │       ├── styles.ts                  # 테마를 전역적으로 설정 (ex: body태그)
    │       ├── compoents                   # 컴포넌트 테마 커스텀
    │       │   ├── index.ts
    │       │   └── ...
    │       └── foundations               # color, size 등 기본 테마 커스텀
    │           ├── index.ts
    │           ├── breakpoints.ts
    │           ├── colors.ts
    │           ├── sizes.ts
    │           ├── typography.ts
    │           └── ...
    └── ...