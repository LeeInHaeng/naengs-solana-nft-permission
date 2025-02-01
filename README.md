vscode rust-analyzer 미동작 관련
================================

- 하위 프로젝트의 Cargo.toml 인식 불가능 (깊은 depth 는 자동 인식이 안됨)

- 해당 프로젝트에 .vscode 폴더 생성 , settings.json 생성

```
{
    "rust-analyzer.linkedProjects": [
        "/home/ihlee/naengs-solana-nft-permission/programs/naengs-solana-nft-permission/Cargo.toml"
    ]
}
```

anchor git 연결
================================
- git repository 생성

- git remote add origin https://github.com/LeeInHaeng/naengs-solana-nft-permission.git