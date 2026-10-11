package com.owais.crm.controller;

import com.owais.crm.entity.Inquiry;
import com.owais.crm.service.InquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/inquiries")
@RequiredArgsConstructor
public class InquiryController {

    private final InquiryService service;

    @GetMapping
    public List<Inquiry> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inquiry> getById(@PathVariable UUID id) {
        Inquiry inquiry = service.findById(id);
        return inquiry != null ? ResponseEntity.ok(inquiry) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Inquiry create(@RequestBody Inquiry inquiry) {
        return service.save(inquiry);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Inquiry> update(@PathVariable UUID id, @RequestBody Inquiry inquiry) {
        if (service.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        inquiry.setId(id);
        return ResponseEntity.ok(service.save(inquiry));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        if (service.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
