use anchor_lang::prelude::*;

declare_id!("7aRToA2uP6zKZRJgJFxfnxJjA69mJKVXWE7hokoj9Uke");

#[program]
pub mod naengs_solana_nft_permission {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
