document.write("hello")
IMG['Title']=new Image()
IMG['Title'].src='img/Ew_S-hTVoAE0Xlr.png'

    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    ctx.drawImage(IMG['Title'],0,0)
    ctx.fillStyle = 'white'
    ctx.fillText('Press Enter to start', WIDTH / 2, HEIGHT /2 +50)
    
