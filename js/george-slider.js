
class Slider {
    constructor(slideName, indicatorName = null, hasInterval = false, slideInterval = 5000){
        this.slides = document.getElementsByClassName(slideName);
        this.indicators = document.getElementsByClassName(indicatorName);
        this.intervalID = null;
        this.hasInterval = hasInterval;
        this.slideInterval = slideInterval;
        if(indicatorName){
            var instance = this;
            $("."+indicatorName).on("click", function(){
                instance.MoveSlideByIndicator($(this));
            });
            this.UpdateIndicator(this.getSlideIndex());
        }
        if(hasInterval){
            this.SlideIntervalManager(true, slideInterval);
        }
    }

    getSlideIndex(){
        var index = 0;
        for(var i = 0; i < this.slides.length; i++){
            if(this.slides[i].style.display == "block"){
                index = i;
                break;
            }
        }
        return index;
    }

    HideSlide(slides, currentSlide, delay = "slow"){
        $(currentSlide).fadeOut(delay, "linear");
        for(var i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
    }

    ShowSlide(slide, delay){
        $(slide).fadeIn(delay, "linear");
        slide.style.display = "block";
    }

    SlideStep(direction){
        return this.getSlideIndex() + direction;
    }

    getIndicatorIndex(item){
        return $(this.indicators).index(item);
    }
    
    MoveSlideByIndicator(item, slideInterval){
        if(this.getIndicatorIndex(item) != this.getSlideIndex()){
            this.MoveSlide(this.getIndicatorIndex(item));
            if(this.hasInterval){
                this.SlideIntervalManager(false);
                this.SlideIntervalManager(true, this.slideInterval);
            }
        }
    }

    MoveSlide(direction){
        this.HideSlide(this.slides, this.slides[this.getSlideIndex()])
        var slideIndex = direction;
        if(slideIndex > this.slides.length - 1){
            slideIndex = 0;
        }
        else if(slideIndex < 0){
            slideIndex = this.slides.length;
        }
        this.ShowSlide(this.slides[slideIndex], "slow");
        if(this.hasInterval){
            this.UpdateIndicator(slideIndex);
        }
    }

    UpdateIndicator(slideIndex){
        for(var i = 0; i < this.indicators.length; i++){
            $(this.indicators[i]).removeClass("active");
        }
        $(this.indicators[slideIndex]).addClass("active");
    }
    
    SlideIntervalManager(flag, time){
        var instance = this;
        if(flag){
            this.intervalID = setInterval(function(){
                instance.MoveSlide(instance.SlideStep(1))}, 
                time
            );
        } else {
            clearInterval(this.intervalID);
        }
    }

}
