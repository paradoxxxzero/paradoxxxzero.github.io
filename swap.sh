#!/usr/bin/env bash
# This is a very gore way to put generated css from styled-components 
# when prerendering back in the <head>
sed -e '1h;2,$H;$!d;g' -e "s/<\/head>\(.*\)!!CSSSTART!!\(.*\)!!CSSEND!!/\2<\/head>\1/" -i docs/index.html