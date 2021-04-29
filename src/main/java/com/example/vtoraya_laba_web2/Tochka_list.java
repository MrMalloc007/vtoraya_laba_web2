package com.example.vtoraya_laba_web2;

import java.util.ArrayList;
import java.util.List;

public class Tochka_list {
    private List<Tochks> informationList; // создает list в <тип того из чего список>

    public Tochka_list() {
        this(new ArrayList<>()); // создается пустой ArrayList
    }

    public Tochka_list(List<Tochks> informationList) {
        this.informationList = informationList;
    }

    public List<Tochks> getInformationList() {
        return informationList;
    }

    public void setInformationList(List<Tochks> informationList) {
        this.informationList = informationList;
    }
}
