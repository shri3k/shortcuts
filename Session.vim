let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Documents/sandbox/libs/Shortcuts
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +35 shortcuts.js
badd +53 ~/.config/nvim/init.vim
badd +1 test/shortcuts_test.js
badd +3 constants.js
badd +13 test.js
badd +1 Shortcuts.js
badd +7 package.json
badd +1 examples/index.html
badd +18 shortcuts.test.js
badd +1 /tmp/.mount_nvimmDDruB/usr/share/nvim/runtime/doc/help.txt
badd +1 /tmp/.mount_nvimEyH8tN/usr/share/nvim/runtime/doc/if_pyth.txt
badd +40 ~/.local/share/nvim/plugged/jest-filler.vim
badd +1 ~/.nvimr
badd +1 ~/.nvimrc
badd +20 events.js
badd +2 utils/generateFullConfigs.js
badd +1 utils/sort.js
badd +1 utils/asciisToCombos.js
badd +5 utils/sortedCombos.js
badd +10 utils/combos.js
badd +5 utils/isEscPressed.js
badd +1 utils/getKeyWithVal.js
badd +2 utils/getModifier.js
badd +1 utils/isObject.js
badd +1 utils/captureKeys.js
badd +1 utils/index.js
badd +1 ~/.config
badd +14 ~/Documents/sandbox/oss/shriek/jestie.vim/plugin/jestie.vim
badd +7 examples/lib/shortcuts.js
badd +1 \[Plugins]
argglobal
silent! argdel *
edit shortcuts.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 31 + 59) / 119)
exe 'vert 2resize ' . ((&columns * 85 + 59) / 119)
exe 'vert 3resize ' . ((&columns * 1 + 59) / 119)
argglobal
enew
file NERD_tree_1
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
wincmd w
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
let s:l = 49 - ((48 * winheight(0) + 33) / 66)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
49
normal! 0
wincmd w
argglobal
if bufexists('shortcuts.test.js') | buffer shortcuts.test.js | else | edit shortcuts.test.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 2 - ((0 * winheight(0) + 33) / 66)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
2
normal! 041|
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 31 + 59) / 119)
exe 'vert 2resize ' . ((&columns * 85 + 59) / 119)
exe 'vert 3resize ' . ((&columns * 1 + 59) / 119)
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
