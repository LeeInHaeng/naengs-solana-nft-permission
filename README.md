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


Anchor 명령어
================================
- anchor init <프로젝트명>

- anchor build

- anchor deploy

- anchor test --skip-build --skip-deploy


anchor git 연결
================================
- git repository 생성

- git remote add origin https://github.com/LeeInHaeng/naengs-solana-nft-permission.git

- git add .

- git commit -m "커밋 메세지"

- git push --set-upstream origin master


anchor build 오류
================================
- failed to parse lock file at: /home/ihlee/naengs-solana-nft-permission/Cargo.lock
```
error: failed to parse lock file at: /home/ihlee/naengs-solana-nft-permission/Cargo.lock

Caused by:
  lock file version 4 requires `-Znext-lockfile-bump`

---> Cargo.lock 에서 version = 4 --> version = 3 으로 변경 ( https://github.com/coral-xyz/anchor/issues/3392#issuecomment-2508412018 )
```

- function or associated item not found in `Mint`
```
#[derive(Accounts)]
          ^^^^^^^^ function or associated item not found in `Mint`

---> Cargo.toml 에서 [features] 하위 idl-build = ["anchor-lang/idl-build"] --> idl-build = ["anchor-lang/idl-build", "anchor-spl/idl-build"] 로 변경
```


solana 관련 사이트
================================
- https://explorer.solana.com/?cluster=devnet

- devnet airdrop : https://solana.com/ko/developers/guides/getstarted/solana-token-airdrop-and-faucets


anchor nft tutorial 사이트
================================
- https://jimii.pages.dev/mint-solana-anchor/?ref=hackernoon.com#metadata-program

- https://medium.com/@elchuo160/creating-an-on-chain-nft-on-solana-using-anchor-rust-ipfs-and-quicknode-c92f548b6e0

- solana playground : https://beta.solpg.io/65ace254cffcf4b13384cf14 ( https://solana.com/ko/developers/guides/games/interact-with-tokens )


추가 Cargo
================================

- cargo add anchor-lang --features=init-if-needed

- cargo add anchor-spl --features=metadata

- cargo add mpl-token-metadata