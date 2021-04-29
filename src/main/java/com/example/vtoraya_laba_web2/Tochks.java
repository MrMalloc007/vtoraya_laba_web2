package com.example.vtoraya_laba_web2;

public class Tochks {
    private double coordinate_x ;
    private double coordinate_y ;
    private double radius ;
    private String runTime;
    private String localTime;
    private String result;

    public Tochks(){
        this(0.0, 0.0, 0.0, "", "", "");
    }

    public Tochks(double coordinate_x, double coordinate_y,double radius,String runTime,String localTime,String result){
        this.coordinate_x = coordinate_x;
        this.coordinate_y = coordinate_y;
        this.radius = radius;
        this.runTime = runTime;
        this.localTime = localTime;
        this.result = result;
    }


    public double getCoordinate_x() {
        return coordinate_x;
    }

    public double getCoordinate_y() {
        return coordinate_y;
    }

    public double getRadius() {
        return radius;
    }

    public String getLocalTime() {
        return localTime;
    }

    public String getResult() {
        return result;
    }

    public String getRunTime() {
        return runTime;
    }

    public void setCoordinate_X(double coordinate_x) {
        this.coordinate_x = coordinate_x;
    }

    public void setCoordinate_y(double coordinate_y) {
        this.coordinate_y = coordinate_y;
    }

    public void setLocalTime(String localTime) {
        this.localTime = localTime;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public void setRunTime(String runTime) {
        this.runTime = runTime;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }
}
