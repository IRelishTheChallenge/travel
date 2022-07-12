package com.example;

import io.micronaut.data.annotation.GeneratedValue;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity
public class Logs{
    

    @Id
    @GeneratedValue(GeneratedValue.Type.AUTO)
    private Long id;
    private String date;
    private String regNumber;
    private String ownerName;
    private Integer odometerStart;
    private Integer odometerEnd;
    private String route;
    private String description;

    public Logs(){ }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getDate(){
        return date;
    }

    public void setDate(String date){
        this.date = date;
    }

    public String getRegNumber(){
        return regNumber;
    }

    public void setRegNumber(String regNumber){
        this.regNumber = regNumber;
    }

    public String getOwnerName(){
        return ownerName;
    }

    public void setOwnerName(String ownerName){
        this.ownerName = ownerName;
    }

    public Integer getOdometerStart(){
        return odometerStart;
    }

    public void setOdometerStart(Integer odometerStart){
        this.odometerStart = odometerStart;
    }

    public Integer getOdometerEnd(){
        return odometerEnd;
    }

    public void setOdometerEnd(Integer odometerEnd){
        this.odometerEnd = odometerEnd;
    }

    public String getRoute(){
        return route;
    }

    public void setRoute(String route){
        this.route = route;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String descrition){
        this.description = descrition;
    }

    @Override
    public String toString(){
        return "Logs{" +
        "id="+ id +
        ", date='" + date + '\'' +
        ", regNumber='" + regNumber + '\'' +
        ", ownerName='" + ownerName + '\'' +
        ", odometerStart='" + odometerStart + '\'' +
        ", odometerEnd='" + odometerEnd + '\'' +
        ", route='" + route + '\'' +
        ", description='" + description + '\'' +
        '}';
    }

    
    
}