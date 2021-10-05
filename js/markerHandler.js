AFRAME.registerComponent('markerhandler',{
    init:async function(){
        this.el.addEventListener('markerFound',()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener('markerLost',()=>{
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        console.log('found')
        var buttonDiv=document.getElementById('button-div')
        buttonDiv.style.display= 'flex'
        var ratingButton = document.getElementById('rating-button')
        ratingButton.addEventListener('click',function(){
            swal({
                icon: 'warning',
                title: 'Rate dish',
                text: 'Work in progress..'

            })
        })
        var orderButton = document.getElementById('order-button')
        orderButton.addEventListener('click',function(){
            swal({
                icon: 'success',
                title: 'Thank you for ordering!',
                text: 'Your order will be served soon, please be patient!'
                
            })
        })
    },
    handleMarkerLost:function(){
        console.log('lost')
        var buttonDiv=document.getElementById('button-div')
        buttonDiv.style.display = 'none'
    }
})