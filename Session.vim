let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Documents/sandbox/libs/Shortcuts
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +3 shortcuts.js
badd +74 ~/.config/nvim/init.vim
badd +1 test/shortcuts_test.js
badd +89 helpers.js
badd +9 constants.js
badd +13 test.js
badd +1 Shortcuts.js
badd +1 NERD_tree_2
badd +8 package.json
badd +1 examples/index.html
badd +9 shortcuts.test.js
badd +1 /tmp/.mount_nvimmDDruB/usr/share/nvim/runtime/doc/help.txt
badd +1 /tmp/.mount_nvimEyH8tN/usr/share/nvim/runtime/doc/if_pyth.txt
badd +40 ~/.local/share/nvim/plugged/jest-filler.vim
badd +1 ~/.nvimr
badd +1 ~/.nvimrc
argglobal
silent! argdel *
edit shortcuts.test.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 9 - ((8 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
9
normal! 03|
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOF
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
