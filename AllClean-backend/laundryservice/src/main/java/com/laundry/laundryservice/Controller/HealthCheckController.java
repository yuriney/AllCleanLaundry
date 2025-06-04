package com.laundry.laundryservice.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class HealthCheckController {

    @GetMapping("/healthcheck")
    public Map<String, String> healthcheck() {
        return Map.of(
                "status", "UP",
                "message", "Laundry Service API is running 🚀"
        );
    }

    @RequestMapping(value = "/healthcheck", method = RequestMethod.OPTIONS)
    public ResponseEntity<Void> corsHeaders() {
        return ResponseEntity.ok().build();
    }
}
