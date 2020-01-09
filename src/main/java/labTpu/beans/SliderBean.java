package labTpu.beans;

import java.io.Serializable;

import javax.faces.bean.CustomScoped;
import javax.faces.bean.ManagedBean;

@ManagedBean(name= SliderBean.BEAN_NAME)
@CustomScoped(value = "#{window}")
public class SliderBean implements Serializable {
    public static final String BEAN_NAME = "SliderBean";
    public String getBeanName() { return BEAN_NAME; }

    private boolean ajaxEnabled = true;
    private int sliderValue;

    public boolean getAjaxEnabled() {
        return ajaxEnabled;
    }

    public void setAjaxEnabled(boolean ajaxEnabled) {
        this.ajaxEnabled = ajaxEnabled;
    }

    public int getSliderValue() {
        return sliderValue;
    }

    public void setSliderValue(int sliderValue) {
        this.sliderValue = sliderValue;
    }
}