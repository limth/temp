set ww=b,s,<,>,[,]
set tabstop=4
set shiftwidth=4
set nowrap
set formatoptions=tcqro
set hlsearch
set incsearch
set cindent
set backspace=indent,eol,start
set fileencodings=ucs-bom,utf-8,latin1
set encoding=utf8
syntax on
set nohlsearch
set number
set lines=60 columns=130

color koehler
set gfn=Lucida_Console:h9
set go=aeM
map <F8> :nohl <CR>
imap <F8> :nohl <CR> i
nmap <C-o> ddO
inoremap <C-Space> <C-n>
nmap <Space> :
"nmap D "_d

set softtabstop=4
set expandtab
set scrolloff=4
set autoindent
set showcmd
set wildmenu
set wildmode=list:longest
set visualbell

nnoremap / /\v
vnoremap / /\v

set ignorecase
set smartcase
set gdefault
set showmatch

set tags+=tags;$HOME

nnoremap <tab> %

let g:molokai_original = 1

execute pathogen#infect()
filetype plugin indent on
filetype plugin on

autocmd vimenter * NERDTree

let g:NERDTreeWinPos = "right"

"source $VIMRUNTIME/mswin.vim
"behave mswin
let mapleader=","

