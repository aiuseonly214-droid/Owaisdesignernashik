package com.owais.crm.service;

import com.owais.crm.entity.Inquiry;
import com.owais.crm.repository.InquiryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class InquiryService {
    private final InquiryRepository repository;

    public List<Inquiry> findAll() {
        return repository.findAll();
    }

    public Inquiry findById(UUID id) {
        return repository.findById(id).orElse(null);
    }

    public Inquiry save(Inquiry inquiry) {
        return repository.save(inquiry);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
