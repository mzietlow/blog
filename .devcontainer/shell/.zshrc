# # Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# # Initialization code that may require console input (password prompts, [y/n]
# # confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

ZSH=/home/devel/.oh-my-zsh
ZSH_CUSTOM=$ZSH/custom
POWERLEVEL9K_DISABLE_CONFIGURATION_WIZARD=true
ZSH_THEME="powerlevel10k/powerlevel10k"
ENABLE_CORRECTION="false"
COMPLETION_WAITING_DOTS="true"
plugins=(vscode git colorize docker docker-compose)
source $ZSH/oh-my-zsh.sh
source ~/.p10k.zsh
# TODO Ascii art

[ -f ~/.windows.sh ] && source ~/.windows.sh

# SSH directory check
[ -d ~/.ssh ] ||  >&2 echo "[WARNING] No SSH directory found, SSH functionalities might not work"

# Timezone check
[ -z $TZ ] && >&2 echo "[WARNING] TZ environment variable not set, time might be wrong!"

[ -f ~/.zshrc-specific.sh ] && source ~/.zshrc-specific
[ -f ~/.welcome.sh ] && source ~/.welcome.sh

# nvm
source /home/devel/.nvm/nvm.sh
