package com.love.portfolio.model;

public class LocationUpdate {
    private String role;      // "male" hoặc "female"
    private double lat;
    private double lng;
    private long timestamp;   // ms

    public LocationUpdate() {
    }

    public LocationUpdate(String role, double lat, double lng, long timestamp) {
        this.role = role;
        this.lat = lat;
        this.lng = lng;
        this.timestamp = timestamp;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}
