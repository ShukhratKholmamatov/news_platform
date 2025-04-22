package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RouteController {

    @PostMapping("/generate")
    public Map<String, Object> generateRoute(@RequestBody Map<String, Object> data) {
        int distance = (int) data.get("distance");

        // Fake coordinates just for demo
        List<Map<String, Double>> coordinates = new ArrayList<>();
        coordinates.add(Map.of("lat", 41.31, "lng", 69.28));
        coordinates.add(Map.of("lat", 41.32, "lng", 69.29));
        coordinates.add(Map.of("lat", 41.33, "lng", 69.30));

        Map<String, Object> response = new HashMap<>();
        response.put("distance", distance);
        response.put("coordinates", coordinates);

        return response;
    }
}
