package com.owais.crm.service;

import com.owais.crm.entity.Quotation;
import com.owais.crm.repository.QuotationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class QuotationService {
    private final QuotationRepository repository;

    public List<Quotation> findAll() {
        return repository.findAll();
    }

    public Quotation findById(UUID id) {
        return repository.findById(id).orElse(null);
    }

    public Quotation save(Quotation quotation) {
        if (quotation.getItems() != null) {
            quotation.getItems().forEach(item -> item.setQuotation(quotation));
        }
        return repository.save(quotation);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
