package com.owais.crm.repository;

import com.owais.crm.entity.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, UUID> {
}
