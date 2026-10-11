package com.owais.crm.service;

import com.owais.crm.entity.Invoice;
import com.owais.crm.repository.InvoiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class InvoiceService {
    private final InvoiceRepository repository;

    public List<Invoice> findAll() {
        return repository.findAll();
    }

    public Invoice findById(UUID id) {
        return repository.findById(id).orElse(null);
    }

    public Invoice save(Invoice invoice) {
        if (invoice.getItems() != null) {
            invoice.getItems().forEach(item -> item.setInvoice(invoice));
        }
        return repository.save(invoice);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
