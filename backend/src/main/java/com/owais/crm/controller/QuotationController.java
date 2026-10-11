package com.owais.crm.controller;

import com.owais.crm.entity.Quotation;
import com.owais.crm.service.QuotationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/quotations")
@RequiredArgsConstructor
public class QuotationController {

    private final QuotationService service;

    @GetMapping
    public List<Quotation> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quotation> getById(@PathVariable UUID id) {
        Quotation quotation = service.findById(id);
        return quotation != null ? ResponseEntity.ok(quotation) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Quotation create(@RequestBody Quotation quotation) {
        return service.save(quotation);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Quotation> update(@PathVariable UUID id, @RequestBody Quotation quotation) {
        if (service.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        quotation.setId(id);
        return ResponseEntity.ok(service.save(quotation));
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
